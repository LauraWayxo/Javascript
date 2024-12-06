# CourseEra Module 3 Quiz 1 Question 4
def sum_of_integers(n):
  if n < 1: 
    return 0


  i = 1 
  sum = 0 
  while i <= n:
    sum = sum + i
    i = i + 1


  return sum


print(sum_of_integers(3))  # should print 6
print(sum_of_integers(4))  # should print 10
print(sum_of_integers(5))  # should print 15
