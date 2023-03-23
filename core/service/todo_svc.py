from core.models import Todo, Note

def add_todo(new_task):
    todo = Todo(description=new_task)
    todo.save()
    return todo.to_dict_json()


def list_todos():
    todos = Todo.objects.all()
    return [todo.to_dict_json() for todo in todos]

def list_notes(request):
    notes = Note.objects.filter(user=request.user)
    return [note.to_dict_json() for note in notes]