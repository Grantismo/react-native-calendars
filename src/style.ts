// default values for app style (see all options for theme type in types.ts)

const FOREGROUND_COLOR = 'white';
const DEFAULT_TEXT_COLOR = 'white';
const SECONDARY_TEXT_COLOR = '#00BBF2';
const AGENDA_TEXT_COLOR = '#7a92a5';
const AGENDA_BG_COLOR = '#f2F4f5';
const DISABLED_COLOR = '#777777;


export const textDayFontFamily = 'Inter_500Medium';
export const textMonthFontFamily = 'Inter_500Medium';
export const textDayHeaderFontFamily = 'Inter_500Medium';
export const todayButtonFontFamily = 'Inter_500Medium';

export const textDayFontWeight = '300';
export const textMonthFontWeight = '300';
export const textDayHeaderFontWeight = undefined;
export const todayButtonFontWeight = '600';

export const textDayFontSize = 16;
export const textMonthFontSize = 16;
export const textDayHeaderFontSize = 13;
export const todayButtonFontSize = 14;

export const textDayStyle = undefined;
export const dotStyle = undefined;
export const arrowStyle = undefined;

export const calendarBackground = FOREGROUND_COLOR;

export const textSectionTitleColor = '#b6c1cd';
export const textSectionTitleDisabledColor = DISABLED_COLOR;
export const selectedDayBackgroundColor = 'transparent';
export const selectedDayTextColor = '#FFC93F';
export const todayBackgroundColor = undefined;
export const todayTextColor = SECONDARY_TEXT_COLOR;
export const dayTextColor = DEFAULT_TEXT_COLOR;
export const textDisabledColor = DISABLED_COLOR;
export const textInactiveColor = DISABLED_COLOR;
export const dotColor = SECONDARY_TEXT_COLOR;
export const selectedDotColor = FOREGROUND_COLOR;
export const disabledDotColor = undefined;
export const inactiveDotColor = undefined;
export const todayDotColor = undefined;
export const arrowColor = SECONDARY_TEXT_COLOR;
export const disabledArrowColor = DISABLED_COLOR;
export const monthTextColor = DISABLED_COLOR;
export const indicatorColor = undefined; // use the default color of React Native ActivityIndicator
export const agendaDayTextColor = AGENDA_TEXT_COLOR;
export const agendaDayNumColor = AGENDA_TEXT_COLOR;
export const agendaTodayColor = SECONDARY_TEXT_COLOR;
export const agendaKnobColor = AGENDA_BG_COLOR;
export const expandableKnobColor = '#e8ecf0';
export const backgroundColor = AGENDA_BG_COLOR; // Agenda's reservations bg color - renamed: 'reservationsBackgroundColor'. TODO: remove in V2
export const reservationsBackgroundColor = AGENDA_BG_COLOR;
export const todayButtonTextColor = SECONDARY_TEXT_COLOR;
export const todayButtonPosition = undefined; // right' / 'left'(default)

export const weekVerticalMargin = 7;
