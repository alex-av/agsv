import { Meta, Story } from "@storybook/angular";
import { ProfilePhotoComponent } from "src/app/components/atoms/profile-photo/profile-photo.component";


export default {
    title: 'UI System/Atoms/Profile-photo',
    component: ProfilePhotoComponent
} as Meta

const Template: Story<ProfilePhotoComponent> = (args:ProfilePhotoComponent)=>({

    props: args

})

export const ProfilePhoto = Template.bind({})
