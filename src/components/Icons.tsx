export type IconProps = {
  color?: string;
} & JSX.IntrinsicElements["svg"];

export const CheckCircle = ({ color = "#25282A", ...rest }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M19.6875 10.5C19.6875 5.1875 15.3125 0.8125 10 0.8125C4.64844 0.8125 0.3125 5.1875 0.3125 10.5C0.3125 15.8516 4.64844 20.1875 10 20.1875C15.3125 20.1875 19.6875 15.8516 19.6875 10.5ZM8.86719 15.6562C8.63281 15.8906 8.20312 15.8906 7.96875 15.6562L3.90625 11.5938C3.67188 11.3594 3.67188 10.9297 3.90625 10.6953L4.80469 9.83594C5.03906 9.5625 5.42969 9.5625 5.66406 9.83594L8.4375 12.5703L14.2969 6.71094C14.5312 6.4375 14.9219 6.4375 15.1562 6.71094L16.0547 7.57031C16.2891 7.80469 16.2891 8.23438 16.0547 8.46875L8.86719 15.6562Z"
        fill={color}
      />
    </svg>
  );
};

export const Times = ({ color = "#25282A", ...rest }: IconProps) => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.28906 6.5L12.3125 2.51562L13.1328 1.69531C13.25 1.57812 13.25 1.38281 13.1328 1.22656L12.2734 0.367188C12.1172 0.25 11.9219 0.25 11.8047 0.367188L7 5.21094L2.15625 0.367188C2.03906 0.25 1.84375 0.25 1.6875 0.367188L0.828125 1.22656C0.710938 1.38281 0.710938 1.57812 0.828125 1.69531L5.67188 6.5L0.828125 11.3438C0.710938 11.4609 0.710938 11.6562 0.828125 11.8125L1.6875 12.6719C1.84375 12.7891 2.03906 12.7891 2.15625 12.6719L7 7.82812L10.9844 11.8516L11.8047 12.6719C11.9219 12.7891 12.1172 12.7891 12.2734 12.6719L13.1328 11.8125C13.25 11.6562 13.25 11.4609 13.1328 11.3438L8.28906 6.5Z"
        fill={color}
      />
    </svg>
  );
};

export const Edit = ({ color = "#25282A", ...rest }: IconProps) => {
	return (
	  <svg xmlns="http://www.w3.org/2000/svg" fill={color} {...rest} height="24" width="24"><path d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Zm-3.525-.725-.7-.7 1.4 1.4Z"/></svg>
	);
};

export const EditMain = ({ color = "#25282A", ...rest }: IconProps) => {
	return (
	  <svg xmlns="http://www.w3.org/2000/svg" fill={color} {...rest} height="24" width="24"><path d="M11 21v-6h2v2h8v2h-8v2Zm-8-2v-2h6v2Zm4-4v-2H3v-2h4V9h2v6Zm4-2v-2h10v2Zm4-4V3h2v2h4v2h-4v2ZM3 7V5h10v2Z"/></svg>
	);
};

export const Delete = ({ color = "#25282A", ...rest }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill={color} {...rest} height="24" width="24"><path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"/></svg>
    );
};

export const Plus = ({ color = "#25282A", ...rest }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill={color} {...rest} height="24" width="24"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>
    );
};

export const ChevronLeft = ({ color = "#25282A", ...rest }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill={color} {...rest} height="24" width="24"><path d="M10 22 0 12 10 2l1.775 1.775L3.55 12l8.225 8.225Z"/></svg>
	);
};

export const Alarm = ({ color = "#25282A", ...rest }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill={color} {...rest} height="40" width="40"><path d="M19.958 36.625q-3.083 0-5.812-1.187-2.729-1.188-4.75-3.209t-3.208-4.75Q5 24.75 5 21.625q0-3.083 1.188-5.812 1.187-2.73 3.208-4.771Q11.417 9 14.146 7.833q2.729-1.166 5.812-1.166 3.125 0 5.854 1.166 2.73 1.167 4.75 3.209 2.021 2.041 3.209 4.771 1.187 2.729 1.187 5.812 0 3.125-1.187 5.854-1.188 2.729-3.209 4.75-2.02 2.021-4.75 3.209-2.729 1.187-5.854 1.187Zm4.917-8.125 1.958-1.958-5.375-5.375v-7.834h-2.791v8.959ZM9.042 3.875 11 5.833l-6.917 6.75-1.958-1.958Zm21.833 0 6.917 6.75-1.917 1.958-6.917-6.75Z"/></svg>
	);
};

export const Stats = ({ color = "#25282A", ...rest }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill={color} {...rest} height="40" width="40"><path d="M11.792 28.417h2.75V16.875h-2.75Zm6.833 0h2.75V11.583h-2.75Zm6.833 0h2.75v-6.334h-2.75ZM7.792 35q-1.125 0-1.959-.833Q5 33.333 5 32.208V7.792q0-1.125.833-1.959Q6.667 5 7.792 5h24.416q1.125 0 1.959.833.833.834.833 1.959v24.416q0 1.125-.833 1.959-.834.833-1.959.833Z"/></svg>
	);
};

export const Inbox = ({ color = "#25282A", ...rest }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill={color} {...rest} height="40" width="40"><path d="M7.792 35q-1.125 0-1.959-.833Q5 33.333 5 32.208V7.792q0-1.125.833-1.959Q6.667 5 7.792 5h24.416q1.125 0 1.959.833.833.834.833 1.959v24.416q0 1.125-.833 1.959-.834.833-1.959.833ZM20 27.417q1.667 0 3.021-.959Q24.375 25.5 25.167 24h7.041V7.792H7.792V24h7.041q.792 1.5 2.146 2.458 1.354.959 3.021.959Z"/></svg>
    );
};