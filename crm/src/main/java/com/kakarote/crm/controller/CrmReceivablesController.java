package com.kakarote.crm.controller;


import com.kakarote.core.common.R;
import com.kakarote.core.common.Result;
import com.kakarote.core.entity.BasePage;
import com.kakarote.core.exception.CrmException;
import com.kakarote.core.servlet.upload.FileEntity;
import com.kakarote.crm.common.CrmModel;
import com.kakarote.crm.constant.CrmCodeEnum;
import com.kakarote.crm.constant.CrmEnum;
import com.kakarote.crm.constant.FieldEnum;
import com.kakarote.crm.entity.BO.CrmChangeOwnerUserBO;
import com.kakarote.crm.entity.BO.CrmContractSaveBO;
import com.kakarote.crm.entity.BO.CrmSearchBO;
import com.kakarote.crm.entity.BO.CrmUpdateInformationBO;
import com.kakarote.crm.entity.PO.CrmReceivables;
import com.kakarote.crm.entity.VO.CrmInfoNumVO;
import com.kakarote.crm.entity.VO.CrmModelFiledVO;
import com.kakarote.crm.service.ICrmReceivablesService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * <p>
 * 回款表 前端控制器
 * </p>
 *
 * @author zhangzhiwei
 * @since 2020-05-28
 */
@RestController
@RequestMapping("/crmReceivables")
@Api(tags = "回款模块接口")
public class CrmReceivablesController {

    @Autowired
    private ICrmReceivablesService crmReceivablesService;

    @PostMapping("/queryPageList")
    @ApiOperation("查询列表页数据")
    public Result<BasePage<Map<String, Object>>> queryPageList(@RequestBody CrmSearchBO search) {
        search.setPageType(1);
        BasePage<Map<String, Object>> mapBasePage = crmReceivablesService.queryPageList(search);
        return R.ok(mapBasePage);
    }

    @PostMapping("/add")
    @ApiOperation("保存数据")
    public Result add(@RequestBody CrmContractSaveBO crmModel) {
        crmReceivablesService.addOrUpdate(crmModel);
        return R.ok();
    }

    @PostMapping("/update")
    @ApiOperation("修改数据")
    public Result update(@RequestBody CrmContractSaveBO crmModel) {
        crmReceivablesService.addOrUpdate(crmModel);
        return R.ok();
    }

    @PostMapping("/queryById/{receivablesId}")
    @ApiOperation("根据ID查询")
    public Result<CrmModel> queryById(@PathVariable("receivablesId") @ApiParam(name = "id", value = "id") Integer receivablesId) {
        Integer number = crmReceivablesService.lambdaQuery().eq(CrmReceivables::getReceivablesId,receivablesId).ne(CrmReceivables::getCheckStatus,7).count();
        if (number == 0){
            throw new CrmException(CrmCodeEnum.CRM_DATA_DELETED,"回款");
        }
        CrmModel model = crmReceivablesService.queryById(receivablesId);
        return R.ok(model);
    }

    @PostMapping("/field")
    @ApiOperation("查询新增所需字段")
    public Result<List<CrmModelFiledVO>> queryField() {
        List<CrmModelFiledVO> crmModelFiledList = crmReceivablesService.queryField(null);
        return R.ok(crmModelFiledList);
    }

    @PostMapping("/field/{id}")
    @ApiOperation("查询修改数据所需信息")
    public Result<List<CrmModelFiledVO>> queryField(@PathVariable("id") @ApiParam(name = "id", value = "id") Integer id) {
        List<CrmModelFiledVO> crmModelFiledList = crmReceivablesService.queryField(id);
        return R.ok(crmModelFiledList);
    }

    @PostMapping("/deleteByIds")
    @ApiOperation("根据ID删除数据")
    public Result deleteByIds(@ApiParam(name = "ids", value = "id列表") @RequestBody List<Integer> ids) {
        crmReceivablesService.deleteByIds(ids);
        return R.ok();
    }

    @PostMapping("/changeOwnerUser")
    @ApiOperation("修改回款负责人")
    public Result changeOwnerUser(@RequestBody CrmChangeOwnerUserBO crmChangeOwnerUserBO){
        crmReceivablesService.changeOwnerUser(crmChangeOwnerUserBO.getIds(),crmChangeOwnerUserBO.getOwnerUserId());
        return R.ok();
    }

    @PostMapping("/information/{id}")
    @ApiOperation("查询详情页信息")
    public Result<List<CrmModelFiledVO>> information(@PathVariable("id") @ApiParam(name = "id", value = "id") Integer id) {
        List<CrmModelFiledVO> information = crmReceivablesService.information(id);
        return R.ok(information);
    }

    @PostMapping("/queryFileList")
    @ApiOperation("查询附件列表")
    public Result<List<FileEntity>> queryFileList(@RequestParam("id") @ApiParam(name = "id", value = "id") Integer id) {
        List<FileEntity> fileEntities = crmReceivablesService.queryFileList(id);
        return R.ok(fileEntities);
    }

    @PostMapping("/num")
    @ApiOperation("详情页数量展示")
    public Result<CrmInfoNumVO> num(@RequestParam("id") @ApiParam(name = "id", value = "id") Integer id) {
        CrmInfoNumVO infoNumVO = crmReceivablesService.num(id);
        return R.ok(infoNumVO);
    }

    @PostMapping("/batchExportExcel")
    @ApiOperation("选中导出")
    public void batchExportExcel(@RequestBody @ApiParam(name = "ids", value = "id列表") List<Integer> ids, HttpServletResponse response) {
        CrmSearchBO search = new CrmSearchBO();
        search.setPageType(0);
        search.setLabel(CrmEnum.RECEIVABLES.getType());
        CrmSearchBO.Search entity = new CrmSearchBO.Search();
        entity.setFormType(FieldEnum.TEXT.getFormType());
        entity.setSearchEnum(CrmSearchBO.FieldSearchEnum.ID);
        entity.setValues(ids.stream().map(Object::toString).collect(Collectors.toList()));
        search.getSearchList().add(entity);
        search.setPageType(0);
        crmReceivablesService.exportExcel(response, search);
    }

    @PostMapping("/allExportExcel")
    @ApiOperation("全部导出")
    public void allExportExcel(@RequestBody CrmSearchBO search, HttpServletResponse response) {
        search.setPageType(0);
        crmReceivablesService.exportExcel(response, search);
    }

    @PostMapping("/updateInformation")
    @ApiOperation("基本信息保存修改")
    public Result updateInformation(@RequestBody CrmUpdateInformationBO updateInformationBO) {
        crmReceivablesService.updateInformation(updateInformationBO);
        return R.ok();
    }


}

