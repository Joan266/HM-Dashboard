import styled from "styled-components";

export const CalendarStyle = styled.div`
    --fc-border-color: #8a8a8a42;

    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 12px;
    max-width: 450px;
    margin-bottom: 1.5rem;
    box-shadow: 4px 4px 5px -3px rgba(0, 0, 0, 0.1);

    .calendar-sidebar {
        width: 300px;
        height: 400px;
        line-height: 1.5;
        background: grey;
        color: black;
        border-right: 1px solid black;
    }

    .calendar-sidebar-section {
        padding: 2em;
    }

    .calendar-main {
        flex-grow: 1;
        padding: 1rem;
    }

    .fc .fc-toolbar-title {
        font-size: 12px;
    }

    .fc { /* the calendar root */
        max-width: 1100px;
        margin: 0 auto;
    }

    .fc-popover-header {
        background-color: #f3f3f3;
        color: #3b3b3b;
    }

    .fc-popover-body {
        background-color: white;
        color: #3b3b3b;
    }

    table[role="presentation"] {
        border-right: 1px solid;
    }

    .fc .fc-day {
        background-color: white;
        transition: color 0.2s ease;

        &:hover {
            color: #799283;
            background-color:  #f3f3f3;
        }
    }

    .fc-scroller {
        &::-webkit-scrollbar {
            width: fit-content;
        }

        &::-webkit-scrollbar-track {
            background: none;
        }

        &::-webkit-scrollbar-thumb {
            background: grey;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }

    .fc-button.fc-button-primary {
        background-color: #f3f3f3;
        color: #3b3b3b;

        &:hover, &:focus, &:focus-visible {
            background-color: #135846;
            color: white;
            box-shadow: unset;
        }

        &.fc-button-active, &.fc-button-active:focus, &.fc-button-active:focus-visible {
            background-color: #135846;
            color: white;
            
            &:focus, &:focus-visible {
                box-shadow: unset;
            }
        }
    }
`