import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, Story, componentWrapperDecorator} from '@storybook/angular';

// Components
import { V1MainComponent } from 'src/app/views/v1-main/v1-main.component';
import { LayoutModule } from 'src/app/components/layouts/layout.module';
import { AtomsModule } from 'src/app/components/atoms/atoms.module';
import { MoleculesModule } from 'src/app/components/molecules/molecules.module';



export default {
    title: 'UI System/Views/Home',
    component: V1MainComponent,
    decorators: [
        moduleMetadata({
            declarations: [ ],
            imports: [CommonModule, LayoutModule,AtomsModule, MoleculesModule]
        }),
        componentWrapperDecorator((story)=>`<div style="width:100vw;  height:100vh">
        ${story}
    </div>`)
    ],
    /*
    argTypes:{
        hello: {control:'color'}
    }*/
} as Meta

const Template:Story<V1MainComponent> = (args: V1MainComponent) => ({
    props: args,
    template: `

            <app-v1-main></app-v1-main>
    
    `
})
export const Home = Template.bind({}); 
/*
Home.args={
    hello:true
}
*/