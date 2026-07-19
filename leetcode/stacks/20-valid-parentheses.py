from typing import List


# Solution inserting closing symbol every time you get the starting symbol
# class Solution:
#     def isValid(self, s: str) -> bool:
#         symbols_start_end = {
#             '(' : ')',
#             '{' : '}',
#             '[' : ']'
#         }

#         symbols_stack = []

#         for symbol in s:
#             if(symbol in symbols_start_end):
#                 symbols_stack.append(symbol)
#             else:
#                 if(not symbols_stack):
#                     return False
                
#                 last_symbol = symbols_stack.pop()
#                 expected_symbol = symbols_start_end.get(last_symbol)
                
#                 if(symbol != expected_symbol):
#                     return False
        
#         return len(symbols_stack) == 0
            
            

class Solution:
    def isValid(self, s: str) -> bool:
        end_to_start_symbol = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        symbols_stack = []
        
        for symbol in s:
            if(symbol in end_to_start_symbol):
                if(not symbols_stack):
                    return False
                
                expected_start_symbol = end_to_start_symbol[symbol]
                
                if(expected_start_symbol != symbols_stack.pop()):
                    return False
            else:
                symbols_stack.append(symbol)
           

        return len(symbols_stack) == 0
            
            

    
    
solution = Solution()

s = '([])'

print(solution.isValid(s))

# Se tenho 
        