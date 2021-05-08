package com.kakarote.admin.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.kakarote.admin.entity.PO.AdminUserRole;
import com.kakarote.admin.mapper.AdminUserRoleMapper;
import com.kakarote.admin.service.IAdminRoleAuthService;
import com.kakarote.admin.service.IAdminUserRoleService;
import com.kakarote.core.common.Const;
import com.kakarote.core.servlet.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

/**
 * <p>
 * 用户角色对应关系表 服务实现类
 * </p>
 *
 * @author zhangzhiwei
 * @since 2020-04-27
 */
@Service
public class AdminUserRoleServiceImpl extends BaseServiceImpl<AdminUserRoleMapper, AdminUserRole> implements IAdminUserRoleService {

    @Autowired
    private IAdminRoleAuthService adminRoleAuthService;

    /**
     * 通过userID删除该用户的所有
     *
     * @param userId   用户ID
     * @param isRemove 是否删除原有角色
     * @param roleIds   角色列表
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveByUserId(Long userId, boolean isRemove, List<String> roleIds) {
        if (isRemove) {
            QueryWrapper<AdminUserRole> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("user_id", userId);
            remove(queryWrapper);
        }
        List<AdminUserRole> adminUserRoleList = new ArrayList<>();
        for (String roleId : roleIds) {
            Integer id = Integer.valueOf(roleId);
            adminUserRoleList.add(new AdminUserRole().setUserId(userId).setRoleId(id));
        }
        boolean queryAllRole = adminRoleAuthService.isQueryAllRole();
        if(!queryAllRole){
            Set<Integer> authByUser = adminRoleAuthService.queryAuthByUser();
            adminUserRoleList.removeIf(userRole->!authByUser.contains(userRole.getRoleId()));
        }
        saveBatch(adminUserRoleList, Const.BATCH_SAVE_SIZE);
    }
}
