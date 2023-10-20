import { toast } from "react-toastify";

export const detailsReducer = (state, action) => {
    switch ( action.type) {
        case "projectModal" :
            return {...state, projectModal : !state.projectModal};
        case "nameEdit" :
            return {...state, nameEdit : !state.nameEdit};
        case "colorEdit" :
            return {...state, colorEdit : !state.colorEdit};
        case "alert" :
            return {...state, alert : !state.alert};
        case "copyLink" :
            {
                navigator.clipboard.writeText(window.location.href);
                toast.success("لینک با موفقیت در کلیپ بورد کپی شد.");
                return ""
            }
        case "proAlert" : 
            return {...state, proAlert : !state.proAlert};
        case "share" :
            return {...state, share : !state.share};
        case "newTask" :
            return {...state, newTask : !state.newTask};
        case "proNameEdit" :
            return {...state, proNameEdit : !state.proNameEdit};
        default:
            return state;
    }
}
