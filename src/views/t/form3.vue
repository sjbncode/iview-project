<template>
    <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Form-item label="姓名" prop="name">
            <i-input :value.sync="formValidate.name" placeholder="请输入姓名"></i-input>
        </Form-item>
        <Form-item label="邮箱" prop="mail">
            <i-input :value.sync="formValidate.mail" placeholder="请输入邮箱"></i-input>
        </Form-item>
        <Form-item label="城市" prop="city">
            <i-select :model.sync="formValidate.city" placeholder="请选择所在地">
                <i-option value="beijing">北京市</i-option>
                <i-option value="shanghai">上海市</i-option>
                <i-option value="shenzhen">深圳市</i-option>
            </i-select>
        </Form-item>
        <Form-item label="选择日期">
            <Row>
                <i-col span="11">
                    <Form-item prop="date">
                        <Date-picker type="date" placeholder="选择日期" :value.sync="formValidate.date"></Date-picker>
                    </Form-item>
                </i-col>
                <i-col span="2" style="text-align: center">-</i-col>
                <i-col span="11">
                    <Form-item prop="time">
                        <Time-picker type="time" placeholder="选择时间" :value.sync="formValidate.time"></Time-picker>
                    </Form-item>
                </i-col>
            </Row>
        </Form-item>
        <Form-item label="性别" prop="gender">
            <Radio-group :model.sync="formValidate.gender">
                <Radio value="male">男</Radio>
                <Radio value="female">女</Radio>
            </Radio-group>
        </Form-item>
        <Form-item label="爱好" prop="interest">
            <Checkbox-group :model.sync="formValidate.interest">
                <Checkbox value="吃饭"></Checkbox>
                <Checkbox value="睡觉"></Checkbox>
                <Checkbox value="跑步"></Checkbox>
                <Checkbox value="看电影"></Checkbox>
            </Checkbox-group>
        </Form-item>
        <Form-item label="介绍" prop="desc">
            <i-input :value.sync="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
        </Form-item>
        <Form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')">提交</i-button>
            <i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
        </Form-item>
    </i-form>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
