package com.kakarote.crm.service.impl;

import cn.hutool.core.bean.BeanUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.kakarote.core.common.Const;
import com.kakarote.core.field.FieldService;
import com.kakarote.core.servlet.BaseServiceImpl;
import com.kakarote.crm.common.CrmModel;
import com.kakarote.crm.entity.PO.CrmReceivablesData;
import com.kakarote.crm.entity.VO.CrmModelFiledVO;
import com.kakarote.crm.mapper.CrmReceivablesDataMapper;
import com.kakarote.crm.service.ICrmReceivablesDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 回款自定义字段存值表 服务实现类
 * </p>
 *
 * @author zhangzhiwei
 * @since 2020-05-28
 */
@Service
public class CrmReceivablesDataServiceImpl extends BaseServiceImpl<CrmReceivablesDataMapper, CrmReceivablesData> implements ICrmReceivablesDataService {

    @Autowired
    private FieldService fieldService;

    /**
     * 设置用户数据
     *
     * @param crmModel crmModel
     */
    @Override
    public void setDataByBatchId(CrmModel crmModel) {
        List<CrmReceivablesData> receivablesDataList = query().eq("batch_id", crmModel.getBatchId()).list();
        receivablesDataList.forEach(obj -> {
            crmModel.put(obj.getName(), obj.getValue());
        });
    }

    /**
     * 保存自定义字段数据
     *
     * @param array data
     */
    @Override
    public void saveData(List<CrmModelFiledVO> array, String batchId) {
        List<CrmReceivablesData> receivablesDataList = new ArrayList<>();
        remove(new LambdaQueryWrapper<CrmReceivablesData>().eq(CrmReceivablesData::getBatchId, batchId));
        Date date = new Date();
        for (CrmModelFiledVO obj : array) {
            CrmReceivablesData receivablesData = BeanUtil.copyProperties(obj, CrmReceivablesData.class);
            receivablesData.setValue(fieldService.convertObjectValueToString(obj.getType(),obj.getValue(),receivablesData.getValue()));
            receivablesData.setName(obj.getFieldName());
            receivablesData.setCreateTime(date);
            receivablesData.setBatchId(batchId);
            receivablesDataList.add(receivablesData);
        }
        saveBatch(receivablesDataList, Const.BATCH_SAVE_SIZE);
    }

    /**
     * 通过batchId删除数据
     *
     * @param batchId data
     */
    @Override
    public void deleteByBatchId(List<String> batchId) {
        LambdaQueryWrapper<CrmReceivablesData> wrapper = new LambdaQueryWrapper<>();
        wrapper.in(CrmReceivablesData::getBatchId,batchId);
        remove(wrapper);
    }
}
