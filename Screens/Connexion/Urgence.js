import React, {useState,useContext} from 'react';
import { Formik } from 'formik';
import { Octicons, Ionicons,Fontisto } from '@expo/vector-icons';
import { Button, ImageBackground,Image } from 'react-native';
import { AuthContext } from '../../Components/globalContext';
import { Text } from 'react-native';

function LogoTitle() {
  return (  
    <Image
      style={{height: '30%',resizeMode:'cover',width:'100%'}}
      source={require('../../assets/img/aide1.jpg')}
    />
  );
}


import {
    StyledContainer1,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    ButtonText,
    StyledButton,
    MsBox,
    Line,
    ExtraText,
    ExtraView,
    Avatar,
    TextLink,
    TextLinkContent
} from '../../Components/styles';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay/lib';


const {brand,darkLight, primary}=Colors;

const Urgence = ({navigation}) => {
    const [hidePassword,setHidePassword]=useState(true);
    const [password,setPassword]=useState(null);
    const [email,setEmail]=useState(null);
    const { loading,login }=useContext(AuthContext)
  return (
    <StyledContainer1>
      <LogoTitle />
        <InnerContainer>
            <PageTitle>Souriez A La Vie</PageTitle>
            <SubTitle>Account Login</SubTitle>
            {/* <Avatar resizeMode="cover" source={require('../../assets/img/aide1.jpg')} /> */}
            <Formik
            initialValues={{ email:'',password:'',}}
            onSubmit={(values)=>{
                console.log(values);
            }}
            >
            {({ handleChange, handleBlur, handleSubmit, values }) =>(
            <StyledFormArea>
                <Spinner visible={loading} />
                <MyTextInput
                    label="Ancien Mot De Passe"
                    icon="lock"
                    placeholder="* * * * * * * * * * * * "  
                    placeholderTextColor={darkLight} 
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    setHidePassword={setHidePassword}
                />
                <MyTextInput
                    label="Nouveau Mot De Passe"
                    icon="lock"
                    placeholder="* * * * * * * * * * * * "  
                    placeholderTextColor={darkLight} 
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    setHidePassword={setHidePassword}
                />
                <MyTextInput
                    label="Confirmation"
                    icon="lock"
                    placeholder="* * * * * * * * * * * * "  
                    placeholderTextColor={darkLight} 
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    setHidePassword={setHidePassword}
                />
                <MsBox>...</MsBox> 
                <StyledButton  onPress={()=>{login(values.email,values.password)}}>
                    <ButtonText>
                        Validation
                    </ButtonText>
                </StyledButton>
                <Line />
                {/* <StyledButton google={true} onPress={handleSubmit}>
                    <Fontisto name='google' color={primary} size={17} />
                    <ButtonText google={true}>
                        Identifiant Oublier
                    </ButtonText >
                </StyledButton> */}
                <ExtraView>
                <ExtraText>La vie est un don et il faut la préserver </ExtraText>
                    {/* <TextLink>
                        <TextLinkContent>SignUp</TextLinkContent>
                    </TextLink> */}
                </ExtraView>
                
                </StyledFormArea>)}
            </Formik>
        </InnerContainer>
    </StyledContainer1>
    // <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
    //     <Spinner visible={loading} />
    //     <TextInput value={email} onChangeText={text=>setEmail(text)} placeholder='email' />
    //     <TextInput value={password} onChangeText={text=>setPassword(text)} placeholder='password' secureTextEntry/>
    //     <Button title='Login' onPress={()=>{login(email,password)}}/>
    // </View>
  );
}
const  MyTextInput = ({ label, icon,isPassword,hidePassword,setHidePassword, ...props })=>{
    return (
         <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                    <Ionicons name={ hidePassword ? 'md-eye-off' : 'md-eye' } size={30} color={darkLight} />
                </RightIcon>
            )}
         </View> 
    );
};
export default Urgence;