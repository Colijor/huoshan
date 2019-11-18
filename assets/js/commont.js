(function ($) {

}(jQuery));

var serverIp = "https://huoshan.szhssj.com.cn/huoshanbackstage";
var imgServer = "https://huoshan.szhssj.com.cn";


// 模态框页面居中
function ModalDialog(id) {
    $('#' + id).on('show.bs.modal', function () {
        var $this = $(this);
        var $modal_dialog = $this.find('.modal-dialog');
        $this.css('display', 'block');
        $modal_dialog.css({ 'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2) });
    });
}

// 所有下拉菜单下拉选项,0:部门，1：角色，2：会员等级，3：代理商等级，4：通道,5:地区,6:分类
function findAllList(code) {
    var data = [];
    $.ajax({
        url: serverIp + "/select/list?code="+code,
        type: "get",
        data: '',
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        async: false,
        success: function (res) {
            console.log("下拉选项: " + code);
            console.log(res);
            data = res;
        }
    });
    return data;
}

// 表单验证
function formValidation(data) {
    for (let key in data) {
        if (data[key] == '' && key == 'Staffnumber') {
            $('.tipText').text("工号不能为空");
            $('#wangModal').modal('show');
        }else  if (data[key] == '' && key == 'Staffname') {
            $('.tipText').text("用户名不能为空");
            $('#wangModal').modal('show');
        }else  if (data[key] == '' && key == 'pwd1') {
            $('.tipText').text("密码不能为空");
            $('#wangModal').modal('show');
        }else  if (key == 'pwd2' && data[key] != data['pwd1']) {
            $('.tipText').text("密码不一致");
            $('#wangModal').modal('show');
        }else  if (data[key] == '' && key == 'Roleclassify') {
            $('.tipText').text("职务不能为空");
            $('#wangModal').modal('show');
        }else  if (data[key] == '' && key == 'Dptlassify') {
            $('.tipText').text("部门不能为空");
            $('#wangModal').modal('show');
        }else  if (data[key] == '' && key == 'phoneNumber') {
            $('.tipText').text("电话不能为空");
            $('#wangModal').modal('show');
        }else  if (data[key] == '' && key == 'Areaclassify') {
            $('.tipText').text("地区不能为空");
            $('#wangModal').modal('show');
        }
    }
}

/**-----------------------------------------查询下拉选项的值----------------------------------------------- */
function findOptions(type,id) {
    var name = '';
    $.ajax({
        type: "get",
        url: serverIp + "/"+type+"/get/" + id,
        data: "",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        async: false,
        success: function (res) {
            if (res.code === 0) {
                name = res.data.name;
            }
        }
    });
    return name;
}

