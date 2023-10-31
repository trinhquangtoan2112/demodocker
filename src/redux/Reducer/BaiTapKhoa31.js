import { CAP_NHAP, CHINH_SUA, THEM_USER, XOA } from "../Types/BaiTapKhoa31Text";



const initialState = {
    taskTaiKhoan: [
        { id: 113132, username: "Taif khoan 1", name: "Nguyen Van A", passwords: "1234", email: "trinhtoanquang@gmail.com", sdt: "09022716456", customTypes: "Khach Hang" },
        { id: 3333, username: "Taif khoan 2", name: "Nguyen Van A", passwords: "1234", email: "trinhtoanquang@gmail.com", sdt: "09022716456", customTypes: "Khach Hang" },
        { id: 5444, username: "Taif khoan 3", name: "Nguyen Van A", passwords: "1234", email: "trinhtoanquang@gmail.com", sdt: "09022716456", customTypes: "Khach Hang" }

    ],
    taskEdit: {


    },
    taskErroe: {
        username: "", name: "", passwords: "", email: "", sdt: "", customTypes: ""

    }
}

const baitapkhoa31 = (state = initialState, action) => {
    switch (action.type) {
        case THEM_USER: {
            let updateState = [...state.taskTaiKhoan];
            let updateState1 = { ...state.taskTaiKhoan };
            // console.log("[]",updateState);
            // console.log("{}",updateState1)
            let index = updateState.findIndex(m => m.email === action.dulieu.task.email);

            if (index !== -1) {
                alert("email da ton tai moi thu lai");
            }
            else {
                updateState.push(action.dulieu.task);
                state.taskTaiKhoan = updateState;


            }

            return { ...state }

        }
        case XOA: {
            let deleteState = [...state.taskTaiKhoan];

            let index = deleteState.findIndex(m => m.id === action.id);

            if (index !== -1) {
                deleteState.splice(index, 1);
                state.taskTaiKhoan = deleteState;

            }
            return { ...state }
        }
        case CHINH_SUA: {
            let editTask = state.taskTaiKhoan.find(m => m.id === action.id);
            state.taskEdit = editTask;
            return { ...state }

        }
        case CAP_NHAP: {

             const capNhapTask =[...state.taskTaiKhoan];
            
             let index = capNhapTask.findIndex(m =>m.id ===action.dulieu.id);
                if(index !==-1){
                    capNhapTask[index] = action.dulieu
                }
               state.taskTaiKhoan = capNhapTask;
               state.taskEdit="";
            return { ...state }
        }
        default: return { ...state }
    }

}

export default baitapkhoa31;