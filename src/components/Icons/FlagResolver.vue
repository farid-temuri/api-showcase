<template>
	<span v-if="name && findFlag(name)" v-html="findFlag(name)">
	</span> 
	<span v-else class="inline-block bg-gray-6 w-21px h-15px font-size-10px text-white rounded-2px line-height-none">
		N/A
	</span>
</template>
<script lang='ts' setup>
const props = defineProps<{
	name?:string
}>()


const flagsMap: Record<string, string> = {
	'US': `<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_14_911)">
<rect width="21" height="15" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H9V7H0V0Z" fill="#1A47B8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 0V1H21V0H9ZM9 2V3H21V2H9ZM9 4V5H21V4H9ZM9 6V7H21V6H9ZM0 8V9H21V8H0ZM0 10V11H21V10H0ZM0 12V13H21V12H0ZM0 14V15H21V14H0Z" fill="#F93939"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 1V2H2V1H1ZM3 1V2H4V1H3ZM5 1V2H6V1H5ZM7 1V2H8V1H7ZM6 2V3H7V2H6ZM4 2V3H5V2H4ZM2 2V3H3V2H2ZM1 3V4H2V3H1ZM3 3V4H4V3H3ZM5 3V4H6V3H5ZM7 3V4H8V3H7ZM1 5V6H2V5H1ZM3 5V6H4V5H3ZM5 5V6H6V5H5ZM7 5V6H8V5H7ZM6 4V5H7V4H6ZM4 4V5H5V4H4ZM2 4V5H3V4H2Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_14_911">
<rect width="21" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
`,
"DZ":`<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_14_1786)">
<rect width="21" height="15" fill="white"/>
<path d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H10V15H0V0Z" fill="#249F58"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.052 10.263C12.23 11.32 10.944 12 9.5 12C7.015 12 5 9.985 5 7.5C5 5.015 7.015 3 9.5 3C10.944 3 12.23 3.68 13.052 4.737C12.417 4.275 11.618 4 10.75 4C8.68 4 7 5.567 7 7.5C7 9.433 8.68 11 10.75 11C11.618 11 12.417 10.725 13.052 10.263Z" fill="#F93939"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7.5L14 7L14.5 6L15 7L16 7.5L15 8L14.5 9L14 8L13 7.5Z" fill="#F93939"/>
</g>
<defs>
<clipPath id="clip0_14_1786">
<rect width="21" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
`,
"RU": `<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_14_1111)">
<rect width="21" height="15" fill="#1A47B8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10H21V15H0V10Z" fill="#F93939"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H21V5H0V0Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_14_1111">
<rect width="21" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
`,
	"CA": `<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_14_1635)">
<rect width="21" height="15" fill="white"/>
<path d="M10.7059 11.6176H10.2941L10.3971 9.97059C10.3912 9.88385 10.3496 9.86105 10.1912 9.86765L8.54412 10.0735C8.54412 10.0735 8.85294 9.66176 8.85294 9.45588C8.85294 9.25 7 7.91176 7 7.91176C7 7.91176 7.41176 7.80882 7.51471 7.70588C7.61765 7.60294 7.10294 6.47059 7.10294 6.47059C7.10294 6.47059 8.14906 6.88235 8.23529 6.77941C8.32153 6.67647 8.44118 6.26471 8.44118 6.26471C8.44118 6.26471 9.26471 7.19118 9.47059 7.19118C9.67647 7.19118 9.05882 4.92647 9.05882 4.92647C9.05882 4.92647 9.57353 5.33824 9.77941 5.33824C9.98529 5.33824 10.5 4 10.5 4C10.5 4 11.0147 5.33824 11.1176 5.33824C11.2206 5.33824 11.9412 4.92647 11.9412 4.92647C11.9412 4.92647 11.4265 7.08824 11.5294 7.19118C11.6324 7.29412 12.5588 6.26471 12.5588 6.26471C12.5588 6.26471 12.6618 6.67647 12.7647 6.77941C12.8676 6.88235 13.8971 6.47059 13.8971 6.47059C13.8971 6.47059 13.3824 7.60294 13.4853 7.70588C13.5882 7.80882 14 7.91176 14 7.91176C14 7.91176 12.1471 9.25 12.1471 9.45588C12.1471 9.66176 12.3529 10.0735 12.3529 10.0735L10.8088 9.86765C10.6847 9.83206 10.6417 9.85907 10.6029 9.97059L10.7059 11.6176Z" fill="#F93939"/>
<rect x="16" width="5" height="15" fill="#F93939"/>
<rect width="5" height="15" fill="#F93939"/>
</g>
<defs>
<clipPath id="clip0_14_1635">
<rect width="21" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
`

}

const findFlag = ( name: string ) => {
	return flagsMap[name.toUpperCase()] 
}
</script>