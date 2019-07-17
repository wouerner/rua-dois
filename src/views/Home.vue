<template>
    <div>
        <v-layout>
            <v-flex>
                <v-sheet height="400">
                    <v-calendar
                        ref="calendar"
                        :now="today"
                        :value="today"
                        color="primary"
                        type="week"
                        >
                        <template v-slot:dayBody="{ date, timeToY, minutesToPixels }">
                            <template v-for="(event, index) in e[date]">
                                <!-- timed events -->
                                <div
                                    v-if="index"
                                    :key="index"
                                    :style="{ top: timeToY(index) + 'px', height: minutesToPixels(30) + 'px' }"
                                    :class="['my-event', 'with-time', classEvent(event) ]"
                                    @click="open(event)"
                                    v-html="event"
                                    ></div>
                            </template>
                        </template>
                    </v-calendar>
                </v-sheet>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Calendar',
    data: () => ({
        e: {},
        today: '2019-07-01',
    }),
    created() {
        this.setCalendarAction(JSON.stringify({
          "phone": "+5516999626879",
          "startDate": "2019-07-01",
          "endDate": "2019-07-06"
        }));
    },
    computed: {
        ...mapGetters({
            calendarGetter: 'calendar/calendarGetter',
        }),
    },
    mounted() {
        this.$refs.calendar.scrollToTime('08:00')
    },
    watch:{
        calendarGetter(val){
            this.e = val.calendar
        }
    },
    methods: {
        ...mapActions({
            setCalendarAction: 'calendar/setCalendarAction',
        }),
        open (event) {
            alert(event)
        },
        classEvent(event){
            let color;
            switch(event){
                case 'occupied':
                    color = 'red white-border'
                    break;
                case 'unavailable':
                    color = 'black white-border'
                    break;
                case 'available':
                    color = 'green white-border'
                    break;
            }

            return color;
        }
    }
}
</script>
<style lang="stylus" scoped>
.my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 3px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #fff;
    font-size: 12px;
    padding: 1px;
    cursor: pointer;
    margin-bottom: 1px;
    left: 4px;
    margin-right: 8px;
    position: relative;

    &.with-time {
        position: absolute;
        right: 4px;
        margin-right: 0px;
        border: 1px solid #fff;
    }
}

.white-border {
    border-color:#fff !important;
}
</style>
