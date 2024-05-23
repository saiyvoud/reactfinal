import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
    {
        title: "ໜ້າຫຼັກ",
        icon: <FaIcons.FaHome />,
        path: "/",
    }
    ,
    {
        title: "ຈັດການຂໍ້ມູນພື້ນຖານ",
        icon: <MdIcons.MdManageAccounts />,
        dropdownKey: 1,
        iconOpen: <FaIcons.FaArrowDown />,
        iconClose: <FaIcons.FaArrowRight />,
        subNav: [
            {
                title: "ນັກຮຽນ",
                icon: <FaIcons.FaUser />,
                path: "/student"
            },
            {
                title: "ອາຈານ",
                icon: <FaIcons.FaChalkboardTeacher />,
                path: "/teacher",
            }
        ]
    }
    ,
    {
        title: "ຈັດການຂໍ້ມູນການຮຽນ - ສອນ",
        icon: <MdIcons.MdManageAccounts />,
        dropdownKey: 2,
        iconOpen: <FaIcons.FaArrowDown />,
        iconClose: <FaIcons.FaArrowRight />,
        subNav: [
            {
                title: "ສົກຮຽນ",
                icon: <FaIcons.FaCalendar />,
                path: "/year"
            },
            {
                title: "ສາຂາ",
                icon: <FaIcons.FaChalkboard />,
                path: "/major"
            },
            {
                title: "ພາກ",
                icon: <FaIcons.FaSchool />,
                path: "/part"
            },
            {
                title: "ວິຊາ",
                icon: <FaIcons.FaBook />,
                path: "/subject"
            },
            {
                title: "ຫ້ອງ",
                icon: <FaIcons.FaSchool />,
                path: "/class_room",
            },
            {
                title: "ຕາຕະລາງຫ້ອງຮຽນ",
                icon: <FaIcons.FaTable />,
                path: "/t",
            }
        ]
    },
    {
        title: 'ສິດເຂົ້າໃຊ້',
        icon: <RiIcons.RiAdminFill />,
        path: '/access_right'
    }
    ,
    {
        title: "ເຊັກລາຍຊື່",
        icon: <FaIcons.FaCheckSquare />,
        path: "/checklist",
    },
    {
        title: "ລາຍງານ",
        icon: <FaIcons.FaFile />,
        path: "/report"
    },
]