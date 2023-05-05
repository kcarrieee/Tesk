const date = new Date();
let today = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear()
const dateString = `${year}-${month}-${today}`

export const options = {
	title: "Выберите дату",
	autoHide: true,
	todayBtn: false,
	clearBtn: false,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-white",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "text-sm font-golos",
		disabledText: "bg-gray-100 font-golos",
		input: "font-golos bg-white border-gray-300 focus:border-black outline-none",
		inputIcon: 'fill-gray-400',
		selected: "bg-black",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.9837 13.9387L0.909478 7.98096C0.673468 7.70375 0.673468 7.29625 0.909478 7.01904L5.98371 1.06126C6.24442 0.75515 6.70758 0.727775 7.00254 1.00104C7.28058 1.25863 7.30605 1.68964 7.06029 1.97819L2.35738 7.5L7.06029 13.0218C7.30605 13.3104 7.28058 13.7414 7.00254 13.999C6.70758 14.2722 6.24442 14.2448 5.9837 13.9387Z" fill="black"/>
					</svg>
					</span>,
		next: () => <span>
				<svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.51629 0.561261L6.59052 6.51904C6.82653 6.79625 6.82653 7.20375 6.59052 7.48096L1.51629 13.4387C1.25558 13.7448 0.792416 13.7722 0.497459 13.499C0.219422 13.2414 0.193948 12.8104 0.439705 12.5218L5.14262 7L0.439704 1.47819C0.193948 1.18964 0.219422 0.758634 0.497458 0.501042C0.792416 0.227775 1.25558 0.255151 1.51629 0.561261Z" fill="black"/>
				</svg>
				</span>,
	},
	datepickerClassNames: "top-12",
	defaultDate: new Date(dateString),
	language: "ru",
}