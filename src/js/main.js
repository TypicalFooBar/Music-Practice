import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import practiceData from '../static/practice-data.json'

let app = new Vue({
    el: '#app',
    data: {
        practiceIsRunning: false,
        secondsSliderValue: 15,
        secondsSinceLastCard: 1,
        cardInterval: null,
        cardData: null
    },
    methods: {
        startScalePractice: function (event) {
            this.practiceIsRunning = true

            // Set the first random card
            {
                // Get a random key
                const randomKey = practiceData.keys[Math.floor(Math.random() * practiceData.keys.length)]

                // Get a random scale
                const randomScale = practiceData.scales[Math.floor(Math.random() * practiceData.scales.length)]

                this.cardData = `${randomKey} ${randomScale}`
            }

            // Set an interval to run every second
            this.cardInterval = setInterval(() => {
                // If the time went over, show a new card
                if (this.secondsSinceLastCard >= this.secondsSliderValue) {
                    // Get a random key
                    const randomKey = practiceData.keys[Math.floor(Math.random() * practiceData.keys.length)]

                    // Get a random scale
                    const randomScale = practiceData.scales[Math.floor(Math.random() * practiceData.scales.length)]

                    this.cardData = `${randomKey} ${randomScale}`

                    // Reset the card timer
                    this.secondsSinceLastCard = 1;
                }
                else {
                    this.secondsSinceLastCard++
                }
            }, 1000)
        },
        startChordPractice: function (event) {
            this.practiceIsRunning = true

            // Set the first random card
            {
                // Get a random key
                const randomKey = practiceData.keys[Math.floor(Math.random() * practiceData.keys.length)]

                // Get a random chord
                const randomChord = practiceData.chords[Math.floor(Math.random() * practiceData.chords.length)]

                this.cardData = `${randomKey}${randomChord}`
            }

            // Set an interval to run every second
            this.cardInterval = setInterval(() => {
                // If the time went over, show a new card
                if (this.secondsSinceLastCard >= this.secondsSliderValue) {
                    // Get a random key
                    const randomKey = practiceData.keys[Math.floor(Math.random() * practiceData.keys.length)]

                    // Get a random chord
                    const randomChord = practiceData.chords[Math.floor(Math.random() * practiceData.chords.length)]

                    this.cardData = `${randomKey}${randomChord}`

                    // Reset the card timer
                    this.secondsSinceLastCard = 1;
                }
                else {
                    this.secondsSinceLastCard++
                }
            }, 1000)
        },
        stopPractice: function (event) {
            clearInterval(this.cardInterval)
            this.practiceIsRunning = false
            this.secondsSinceLastCard = 1;
        }
    }
})