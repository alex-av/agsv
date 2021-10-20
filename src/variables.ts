export interface UISystem {
    primary:string,
    secondary:string,
    notification:string,
    blue_bg:string,
    blue_light:string, 
    blue_deg:string,
    blue_text:string,
    blue_dark:string,
    error:string,
    brown:string,
    bg_gray:string,
    titles_gray:string,
    text_gray:string,
    post_botder:string,
    nav_gray_color:string,
    productor:string,
    investigador:string,
    extensionista:string,
    preguntas:string, 
    compartido:string,
    main_font:string,
    titles_font:string,
    light_font:string,
    font_size:string,
    font_size_content:string;
    font_size_mini:string;
    border_radius:string,
    dark_border:string,
    input_bg:string,
    dark_input_font_color:string,
}

export const UI:UISystem ={

    primary: '#2B95D1', /* Main blue */
    secondary: 'rgb(149, 192, 32)', /* hex: #9EBE38 */
    notification: '#E75555', 
    blue_bg: '#0067B1',
    blue_light: '#00B0EB',
    blue_deg:'#0078BE',
    blue_text:'#C4E5FF',
    blue_dark: 'rgb(0,104,177)',
    error: 'rgb(227,0,20)',
    brown: 'rgb(104,56,15)',
    
        /* Grises */
    bg_gray: '#F3F3F3',
    titles_gray: '#4E565C',
    text_gray:' #82868A',
    post_botder:'#D1D1D1',
    nav_gray_color:'#848C92',
        
        /* Tipo de usuaroi */
    productor:  'rgb(149, 192, 32)', /* hex: #9EBE38 */
    investigador:'rgb(255, 237, 0)', /* hex: #EEE64A */
    extensionista: '#D78128',
    
        /* Categorías */
    preguntas: 'rgb(0,123,58)', /* hex : #007C3A */
    compartido:'rgb(0, 177, 235)', /* hex: #2B95D1, */
    
        /* Fonts */
    main_font: 'Conv_Ubuntu-Medium',
    titles_font: 'Conv_Ubuntu-Bold',
    light_font: 'Conv_Ubuntu-Light',
    
        /* Font size */
    font_size: '1rem',
    font_size_content:'0.8rem',
    font_size_mini: '0.7rem',
    
        /* border-radius: ,*/
    border_radius: '4px',
    
        /* themes */
        /* light*/
        /* dark */
    dark_border:'rgba(255, 255, 255, 0.4)',
    input_bg:'rgba(255,255,255,0.05)',
    dark_input_font_color: 'rgba(255, 255, 255, 0.8)',

}

