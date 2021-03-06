import _ from 'lodash';
import { now } from 'moment';
import Settings from "@/settings";

const mutations = {
    DISABLE_DRAWER(state) {
        if (state.drawer)
            state.drawer = !state.drawer;
    },
    TOGGLE_DRAWER(state) {
        state.drawer = !state.drawer;
    },
    DRAWER(state, val) {
        state.drawer = val;
    },
    SWITCH_NAVIGATION(state, val) {
        state.bottomNavSection = val;
    },
    ALERT_COMMIT(state, msg) {
        state.alert.message = msg;
        state.alert.show = true;
    },
    ALERT_CLEAR(state) {
        state.alert.message = "";
        state.alert.show = false;
    },
    FILTER_TOOLBAR_TOGGLE(state) {
        state.toolbar.on = !state.toolbar.on;
    },
    ACTIVITY_TYPE_SHEET_TOGGLE(state) {
        state.activityTypeSheet = !state.activityTypeSheet;
    },
    ACTIVITY_API_OFFSET_NEXT(state, offset) {
        state.search.activities.filter.offset = offset;
    },
    ACTIVITY_API_FILTER_RESET(state) {
        state.search.activities.filter.offset = 0;
        state.search.activities.filter.startDate = undefined;
        state.search.activities.filter.endDate = undefined;
        state.toolbar.filter = false;
    },
    ACTIVITY_API_FILTER_MUTATE(state, filter) {
        state.search.activities.filter.offset = 0;
        state.search.activities.filter.startDate = filter.startDate;
        state.search.activities.filter.endDate = filter.endDate;
        state.toolbar.filter = true;
    },
    ACTIVITY_SET_FILTER_CHIP(state, chip) {
        state.search.activities.chip = chip;
    },
    DASHBOARD_API_BEGIN_LOADING(state) {
        state.isLoading = !state.isLoading;
    },
    DASHBOARD_COMMIT(state, dashboard) {
        state.dashboardTools = JSON.parse(JSON.stringify(dashboard));
    },
    DASHBOARD_API_DATA_LOADED(state) {
        state.isLoading = !state.isLoading;
    },
    ACTIVITY_API_BEGIN_LOADING(state) {
        state.activitiesLoading = !state.activitiesLoading;
    },
    ACTIVITIES_CLEAR(state) {
        state.activities = [];
    },
    ACTIVITY_API_DATA_LOADED(state, activities) {
        state.activitiesLoading = !state.activitiesLoading;
        state.activities = activities && Array.isArray(activities) 
            ? [...state.activities, ...activities] : state.activities;
    },
    ACTIVITY_FORM_DRAFT(state, { type, activity }) {
        if (activity)
            state.activity = activity;
        if (type)
            state.activityType = type;
    },
    ACTIVITY_FORM_VALID(state, val) {
        state.activityFormValid = val;
    },
    ACTIVITY_DETAIL_OPEN(state, activityDetail) {
        state.activityDetailOpen = true;
        state.activity = activityDetail;
    },
    ACTIVITY_DETAIL_CLOSE(state) {
        state.activityDetailOpen = false;
        state.activity = {
            dateTime: undefined,
            title: "",
            group: "",
            value: "",
            description: ""
        }
    },
    ACTIVITY_TRANSACTION_ID_COMMIT(state, id) {
        state.newActivityTransactionId = id;
    },
    ACTIVITY_SUBMIT_REQUEST(state) {
        state.activitySubmitRequest = true;
    },
    ACTIVITY_SUBMIT_RESET(state) {
        state.activitySubmitRequest = false;
        state.activity = {
            dateTime: undefined,
            title: "",
            group: "",
            value: "",
            description: ""
        }
    }
}

export default mutations;