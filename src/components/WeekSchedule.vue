<template>
  <div>
    <h3>Monday</h3>
    <classes-for-weekday :classes="classes.monday" day="Monday"/>

    <h3>Tuesday</h3>
    <classes-for-weekday :classes="classes.tuesday" day="Tuesday"/>

    <h3>Wednesday</h3>
    <classes-for-weekday :classes="classes.wednesday" day="Wednesday"/>

    <h3>Thursday</h3>
    <classes-for-weekday :classes="classes.thursday" day="Thursday"/>

    <h3>Friday</h3>
    <classes-for-weekday :classes="classes.friday" day="Friday"/>

    <h3>Saturday</h3>
    <classes-for-weekday :classes="classes.saturday" day="Saturday"/>

    <h3>Sunday</h3>
    <classes-for-weekday :classes="classes.sunday" day="Sunday"/>

  </div>
</template>

<script>
import ClassesForWeekday from '@/components/ClassesForWeekday'

export default {
  name: 'WeekSchedule',
  components: {
    ClassesForWeekday,
  },
  props: {
    classes: {
      type: Object
    },
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
h3 {
  font-size: 120%;
}
</style>
