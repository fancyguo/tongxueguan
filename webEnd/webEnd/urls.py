from django.conf.urls import include, url
from django.conf.urls import patterns
from django.views.generic import TemplateView
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'webEnd.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^polls/', include('polls.urls', namespace="polls")),
    url(r'^$', 'webEnd.views.home'),
    url(r'^user/login/$', 'webEnd.views.home'),
]

urlpatterns += [
    url(r'^crossdomain.xml$',TemplateView.as_view(template_name="crossdomain.xml"))
]
