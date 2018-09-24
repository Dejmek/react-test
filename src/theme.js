import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

const theme = {
    main: '#1b1c26',
    border: '#202431',
    background: '#222633',
    content: '#2f3343',
    text_highlight: '#fff',
    text_normal: '#777778',
    text_lighter: '#acacae',
    main_gradient: 'linear-gradient(to bottom, rgba(240,125,215,1) 0%, rgba(151,56,189,1) 100%)',
    radius: '0.5rem',
};

injectGlobal`
	@font-face {
		font-family: "Planer Regular";
		src: url("./fonts/Planer_Reg.ttf");
	};
	${styledNormalize}
	#root,html,body{
		height: 100vh;
	}
	body{
		font-family: "Planer Regular";
		color: ${theme.text_normal}
	}
`;

export default theme;
