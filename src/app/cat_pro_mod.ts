export class cat_pro_mod{
    constructor(
        public cat_id:number,
        public cat_name:string,
        public p_id:number,
        public p_name:string,
        public p_price:number,
        public p_qty:number,
        public p_mfg:string,
        public p_soh:number,
        public p_img:string,
        public p_color:string,
        public fkcat_id:number,
        public p_desc:string)
        {
        }
}