import * as Yup from 'yup';

const student = Yup.object().shape({
    sName: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    sSurname: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    birthday: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    nationallity: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    gender: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    village: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    district: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    province: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    tel: Yup.string().matches(/^\d+$/, 'ກະລຸນາປ້ອນເລກໂທລະສັບທີ່ຖືກຕ້ອງ').required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    sID: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
});

const teacher = Yup.object().shape({
    tName: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    tSurname: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    tType: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    age: Yup.string().matches(/^\d+$/, 'ກະລຸນາປ້ອນເລກອາຍຸຖືກຕ້ອງ').required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    gender: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    tel: Yup.string().matches(/^\d+$/, 'ກະລຸນາປ້ອນເລກໂທລະສັບທີ່ຖືກຕ້ອງ').required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    tID: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
});

const year = Yup.object().shape({
    yearNumber: Yup.string().matches(/^\d+$/, 'ກະລຸນາປ້ອນຕົວເລກຖືກຕ້ອງ').required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
});

const part = Yup.object().shape({
    pName: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
});

const subject = Yup.object().shape({
    subName: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    subTime: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
    tUuid: Yup.string().required('ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບ'),
});

const validationSchema = {
    student,
    teacher,
    year,
    part,
    subject
};

export default validationSchema;