export default function filtroErros(e){
    return e?.details?.map((objeto)=>objeto?.message)
};