import { Center, Heading, Image, Text, VStack, ScrollView} from '@gluestack-ui/themed'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { useNavigation } from '@react-navigation/native'
import BackgroundImg from '@assets/background.png'
import Logo from "@assets/logo.svg"
import { Input } from '@components/Input'
import { Button } from '@components/Button'
export function SignIn(){

   const navigation = useNavigation<AuthNavigatorRoutesProps>() 
   function handleNewAccount(){
      navigation.navigate("signUp")
   }


   return(
      <ScrollView contentContainerStyle={{ flexGrow: 1}} showsHorizontalScrollIndicator={false}>
      <VStack flex={1} >
         <Image 
         w="$full"
         h={624}
         source={BackgroundImg} 
         defaultSource={BackgroundImg} 
         alt="pessoas treinando"
         position="absolute"
         />
         <VStack flex={1} px="$12" pb="$16">
         <Center my="$24">
         <Logo />
         <Text color="$gray100" fontSize="$sm">
            Treine sua mente e seu corpo</Text>
         </Center>
         <Center gap="$2">
            <Heading color="$gray100">Acesse a conta</Heading>
            <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none"/>
            <Input placeholder="Senha" secureTextEntry/>
         <Button title="Acessar" />
        
         </Center>
         <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">Ainda não tem acesso?</Text>
            <Button title="Criar Conta" variant="outline" onPress={handleNewAccount}/>

         </Center>
      </VStack>
      </VStack>
      </ScrollView>
   )
}