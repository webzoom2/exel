import java.util.*;
public class 1{
    public static void display(String str){
        int[] a= new int[str.length-1];
       int a=str[0]-'0';
        for(int i=1;i<str.length;i++){
            a[i-1]=str[i]-'0';
        }
        Arrays.sort(a);
        int sum=0;
        int x=1;
        for(int i=0;i<a.length;i++){
            sum=x*a[i]+sum;
            x=x*10;
        }
        sum=x*10*a+sum;
        int sum1=str-'0';
        if(sum1<sum){
            system.out.println(sum);
        }
        else{
            system.out.println("Largest String");
        } 
    }
     public static void main(String[] args){
        //  input 
        display(str);
     }
}