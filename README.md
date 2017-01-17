Date component:

1. package.json  =>  "react-flatpickr-bud": "^3.0.1",

2. parent component passes 2 dates: start, end, onDateChange().
start- default for a week ago. end- default to today.

3. Date component:
- import Flatpickr from 'react-flatpickr-bud';
- render 2 instances of the flatpicker and a search button.
- this.state is initialized with default dates passed by props from parent.
- onChangeStart/onChangeEnd will setState for start/end dates.
- the user can change the time and date a few time, before submitting a search.
- on search click dataChage() => e.preventDefualt and calling props.onDateChange(start, end).
- parent component gets the new dates.

4. require scss files from node_modules.
