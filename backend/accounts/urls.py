from django.urls import path
from .views import SignUpView, GetCSRFToken, LoginView,GetUsersView ,LogoutView,CheckAuthenticatedView,DeleteAccountView



urlpatterns = [
     path('register', SignUpView.as_view(), name='signup'),
     path('csrf_cookie', GetCSRFToken.as_view(), name='crsf_token'),
     path('login/', LoginView.as_view()),
     path('logout/', LogoutView.as_view()),
     path('delete/', DeleteAccountView.as_view()),
     path('autheticated/', CheckAuthenticatedView.as_view()),
     path('get_users/', GetUsersView.as_view()),
]
