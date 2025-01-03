import {
   Text,
   Heading,
   HStack,
   VStack,
 } from '@gluestack-ui/themed'



export function HistoryCard(){
   return(
      <HStack
       w="$full"
       px="$5"
       py="$4"
       mb="$3"
       bg="$gray600"
       rounded="$md"
       alignItems="center"
       justifyContent="space-between">
          <VStack flex={1} mr="$5" >
          <Heading
            color="$white"
            fontSize="$md"
            fontFamily="$heading"
            textTransform="capitalize">
              Costas
          </Heading>
          <Text 
            fontSize="$lg" 
            color="$gray200" 
            mt="$1" 
            numberOfLines={1}>
              Puxada frontal
          </Text>
        </VStack>
          <Text color="$gray300" fontSize="$md">
                  08:56
          </Text>
        </HStack>
   )
}