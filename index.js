const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Get total number of batteries
const totalBatteries = batteryBatches.reduce(
    (battery, sum) => {
        return sum + battery;
    },
    0
);
