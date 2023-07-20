from django.contrib.auth.models import User
from rest_framework.views  import APIView
from rest_framework import permissions
from rest_framework.response import Response
# from accounts.models import UserProfile
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from django.contrib import auth
from  .serializers import UserSerializer






@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        try:
            isAuthenticated = User.is_authenticated
            if isAuthenticated:
                return Response({'isAuthenticated':'success'})
            else:
                return Response({'isAuthenticated':'error'})

        except:
            return Response({'error': 'Something went wrong'})

@method_decorator(csrf_protect, name='dispatch')
class SignUpView(APIView):
    permission_classes = (permissions.AllowAny,)


    def post(self, requesr, format=None):
        data = self.request


        username = data['username']
        password = data['password']
        re_password = data['re_password']

        if password == re_password:
            try:
                if User.objects.filter(username=username).exists():
                    return Response({'error':'Username already exists'})
                else:
                    if len(password) < 6:
                        return Response({'error':'Password must be at least  6 characters'})
                    else :
                        user = User.objects.create_user(username = username, password=password)
                        user.save()
                        user = User.objects.get(usernmae=username)
                        user = User.objects.get(id=user.id)
                        user_profile = UserProfile(user=user, first_name = '', last_name = '', phone='', city='')
                        user_profile.save()

                        return Response({'success':'User created successfully'})
            except:
                return Response({'error':'Something went wrong !'})
        else:
            return Response({'error': 'Passwords do not match'})



@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']

        user = auth.authentcate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return Response({'success': 'User authenticated', 'username':username})
        else:
            return Response({'error':'Error Authenticating User'})
        

class LogoutView(APIView):
    def post(self, request, format=None):
        try:
            auth.logout(request, user)
            return Response({'success':'Logged Out'})
        except:
            return Response({'error':'Something went wrong while logging out'})
        

@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})


class DeleteAccountView(APIView):
    def delete(self, request, format=None):
        user = self.request.user

        try:
            user = User.objects.filter(id=user.id).delete()
            return Response({'success': 'User deleted successfully'})
        except:
            return Response({'error':'Something went wrong when trying to delete user! '})
        
class GetUsersView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        users = User.objects.all()
        users = UserSerializer(users, many=True)
        return Response(users.data)
    

    