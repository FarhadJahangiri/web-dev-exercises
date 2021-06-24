from json import loads
from django.http import JsonResponse
from django.http.response import HttpResponseNotAllowed

# def view_article(request,id):
#     return JsonResponse({
#         'id': id,
#         'name': 'Screwdriver'
#     })

def view_article(request, id):
    if request.method == 'GET':
        return JsonResponse({
            'name': 'Farhad',
            'id': 7
        })
    elif request.method == 'POST':
        data = loads(request.body)
        return JsonResponse({
            'name': data['name'],
            'id': data['id']
        })

        # DELET
        # PATCH
        # return HttpResponseNotAllowed(['GET', 'POST']):