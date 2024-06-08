import Swal from "sweetalert2";

export function timeFormatter (value) {
    if(!value || value === '' || (typeof value !== 'string')) return "--";
    return value.match(/^\d{4}-\d{2}-\d{2}/)[0];
}


export async function autoFetchingData (fetchDataApi, setFetchData, label) {
    const response = await fetchDataApi();
    if (!response) {
      Swal.fire({
        title: "ຜິດພາດ",
        text: `ບໍ່ສາມາດດິງຂໍ້ມູນ${label}ໄດ້ ກະລຸນາເຂົ້າສູ່ລະບົບອີກຄັ້ງ`,
        icon: "error",
      });
      //navigate("/login");
      return;
    }
    console.log(`${label} getAll data::=>`);
    console.log(response);
    setFetchData(response);
}