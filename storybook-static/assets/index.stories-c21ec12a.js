import{j as z}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function v(e){if(e)return e.replace(/(undefined)|(false)|\n/g,"").replace(/ +(?= )/g,"").replace(/^ */g,"").replace(/ *$/g,"")}const n={"storybook-button":"_storybook-button_h58em_1","storybook-button--primary":"_storybook-button--primary_h58em_11","storybook-button--secondary":"_storybook-button--secondary_h58em_16","storybook-button--small":"_storybook-button--small_h58em_22","storybook-button--medium":"_storybook-button--medium_h58em_27","storybook-button--large":"_storybook-button--large_h58em_32"},s=({color:e="primary",size:f="medium",label:h,...B})=>z.jsx("button",{type:"button",className:v(`${n["storybook-button"]} ${n[`storybook-button--${e}`]} ${n[`storybook-button--${f}`]}`),...B,children:h});try{s.displayName="Button",s.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{color:{defaultValue:{value:"primary"},description:"Is this the principal call to action on the page?",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const q={title:"atoms/Button",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"string",default:"medium",description:"small, medium, large"}},color:{control:{type:"string",default:"primary",description:"primary, secondary"}},label:{control:{type:"string",default:"button name",description:"button name"}},onClick:{action:"clicked"}}},o={args:{size:"medium",color:"primary",label:"Button"}},r={args:{size:"medium",color:"secondary",label:"Button"}},t={args:{size:"large",label:"Button"}},a={args:{size:"small",label:"Button"}};var l,u,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: "medium",
    color: "primary",
    label: "Button"
  }
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "medium",
    color: "secondary",
    label: "Button"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,y,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,_,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(k=(_=a.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const C=["Primary","Secondary","Large","Small"];export{t as Large,o as Primary,r as Secondary,a as Small,C as __namedExportsOrder,q as default};
//# sourceMappingURL=index.stories-c21ec12a.js.map
