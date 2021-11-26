# Write your MySQL query statement below
SELECT W1.id from Weather W1, Weather W2 WHERE W1.temperature > W2.temperature AND TO_DAYS(W1.recordDate) - TO_DAYS(W2.recordDate) = 1;