import { Meta, Story } from "@storybook/angular";
import { IconComponent as appIcon } from "src/app/components/atoms/icon/icon.component";


const ops:string[] = ['down-arrow',
'right-arrow',
'answer',
'ask',
'bookmark',
'calendar-dark',
'camera',
'headphones',
'image',
'mic',
'notification-filled',
'notification',
'play-btn',
'pwd',
'ranking',
'search',
'share',
'tag',
'user',
'tick-arrow',
'star',
'home',
'share-outline',
'check-outline',
'ask-outline',
'plus',
'message',
'gps',
'comments',
'edit'
]



// Declaro
export default {
    title: 'UI System/Atoms/Icon',
    component: appIcon,


} as Meta

const Template: Story<appIcon> = (args: appIcon) => ({
    props:args,
})

export const Icon = Template.bind({})
/*
Icon.args = {
    icon:'user'
}
*/
Icon.argTypes={
    icon:{
        options:[...ops],
        control:{ type:'select'}
    }
}