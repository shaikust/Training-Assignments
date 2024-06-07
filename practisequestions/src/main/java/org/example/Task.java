package org.example;

public class Task {
    private   int id;
    private  String name;
    private  int hrs;

    public Task(int id, String name, int hrs) {
        this.id = id;
        this.name = name;
        this.hrs = hrs;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getHrs() {
        return hrs;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setHrs(int hrs) {
        this.hrs = hrs;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", hrs=" + hrs +
                '}';
    }
}
