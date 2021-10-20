
import { Meta, Story } from "@storybook/angular";
import { ButtonComponent} from "src/app/components/atoms/button/button.component";

// Declaro
export default {
    title: 'UI System/Atoms/Button',
    component: ButtonComponent,


} as Meta

// Genera la template
const Template: Story<ButtonComponent> = (args: ButtonComponent,) => ({
    props:args,
    template:`
        <app-button></app-button>   
    `
})
// Exporta el componente
export const Button = Template.bind({})

// Se setean los valores por defecto de los campos del componente
Button.args = {
    content:'Button'
}
// Se definen los tipo de campos que tendrá la documentación
Button.argTypes= {
    type: {
        table: { type: {
        
        },
            defaultValue:{summary:'button'},        
        },
        options: ['button', 'submit', 'reset'],
        control: { type: 'select', labels:{ button:'button', submit:'submit', reset:'reset'  } }
    },
    info:{
        control:{ type: 'input'}
    }
}



