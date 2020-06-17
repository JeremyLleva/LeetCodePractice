class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        for index, num in enumerate(nums):
            n = target - num
            #store value in has function if cant find correct target
            if n not in hash:
                hash[num] = index
            #if value is in one of the has pairs return both
            else:
                return [hash[n], index]