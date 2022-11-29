tests=int(input("Enter a number: "))

for test in range(tests):
            n=int(input())
            while n // 5 != 0:
                        n = n//5
                        zeros += n
            print(zeros)
                        