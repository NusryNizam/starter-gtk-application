
const Gtk = imports.gi.Gtk;

let app = new Gtk.Application({ application_id: 'org.gtk.ExampleApp' });

app.connect('activate', () => {
    let win = new Gtk.ApplicationWindow({ application: app });
    let btn = new Gtk.Button({ label: 'Hello, World!' });
        let btn2 = new Gtk.Button({ label: 'Hello, 2!' });
    btn.connect('clicked', () => { win.close(); });
    win.add(btn);
    win.add(btn2);
    win.show_all();
});

app.run([]);

