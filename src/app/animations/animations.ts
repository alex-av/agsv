import { trigger, transition, style, animate, state } from "@angular/animations";


export const fadeInOut_f=(name:string='fadeInOut',time:string = '200ms', animation:string = 'ease-out') => {
    return trigger(name, [
        transition(':enter', [
            style({ opacity: 0 }), 
            animate(`${time} ${animation}`, style({ opacity: 1 }))
        ]),
        transition(':leave', [
            animate(`${time} ${animation}`, style({ opacity: 0 }))])
        ])
}


export const slide_X_InOut_f =  (name:string='slideXInOut',time:string = '200ms', animation:string = 'ease-out', distance:string='-200rem') => {

    return trigger(name, [
    transition(':enter', [
        style({ opacity: 0, transform: `translateX(${distance})` }), 
        animate(`${ time } ${ animation }`, style({ opacity: 1, transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
        animate(`${ time } ${ animation }`, style({ opacity: 0, transform: `translateX(${distance})` }))])
    ])
}  


export const slide_Y_InOut_f =  (name:string='slideYInOut',time:string = '200ms', animation:string = 'ease-out', distance:string='-200rem') => {

    return trigger(name, [
    transition(':enter', [
        style({ opacity: 0, transform: `translateY(${distance})` }), 
        animate(`${ time } ${ animation }`, style({ opacity: 1, transform: 'translateY(0)' }))
    ]),
    transition(':leave', [
        animate(`${ time } ${ animation }`, style({ opacity: 0, transform: `translateY(${distance})` }))])
    ])
}  
// '800ms', 'cubic-bezier(0,.86,.35,1)', '-200rem'

export const toggleAnimation = (name:string="openClose",initialState:string="open", finalState:string="close", time:string="0.8s", animation:string="ease-out") => {
    return trigger(name,[
        state(initialState, style({ opacity: 1 })),
        state(finalState, style({ opacity: 0 })),
        transition(`${initialState} => ${finalState}`, [animate(`${time} ${animation}`)]),
        transition(`${finalState} => ${initialState}`, [animate(`${time} ${animation}`)])
      ])
}

//cubic-bezier(0,.97,.43,1)