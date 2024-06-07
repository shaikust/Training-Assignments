package org.example;

import java.util.*;
import java.util.stream.Collectors;

public class Main {
    private static List<Employees> employeelist(){
        Task task1=new Task(1,"task1",2);
        Task task2=new Task(2,"task2",3);
        Task task3=new Task(3,"task3",2);
        Task task4=new Task(4,"task4",1);

        List<Task> tasks1 = new ArrayList<>();
        tasks1.add(task1);
        tasks1.add(task2);
        tasks1.add(task4);
        tasks1.add(task3);

        List<Task> tasks2 = new ArrayList<>();
        tasks2.add(task2);
        tasks2.add(task1);

        List<Task> tasks3 = new ArrayList<>();
        tasks3.add(task1);
        tasks3.add(task2);
        tasks3.add(task4);
        tasks3.add(task3);

        List<Employees> employees=new ArrayList<>();
        employees.add(new Employees(101,"samuel",33,40000,"cse",  tasks2));
        employees.add(new Employees(11,"aam",23,20000,"cse", tasks1));
        employees.add(new Employees(12,"aam",22,20000,"eee", tasks1));
        employees.add(new Employees(111,"bami",26,30000,"eee",tasks3));
        return  employees;
    }

    public static  void  main(String[] args){

        System.out.println("sorted by name "+employeelist().stream()
                .sorted((e1,e2)->e1.getName().compareTo(e2.getName()))
                .collect(Collectors.toList())

        );
        System.out.println("sorted by name and age"+employeelist().stream()
                .sorted((e1,e2)->{
                    int ref=e1.getName().compareTo(e2.getName());
                    if(ref!=0){
                        return ref;
                    }
                    else {
                        return Integer.compare(e1.getAge(),e2.getAge());
                    }
                })
                .collect(Collectors.toList())
        );

        System.out.println("employees with number of task >= 4 "+employeelist().stream()
                .filter(employees ->employees.getTasks().size()>=4)
                .sorted((e1,e2)->{
                    int ref=e1.getName().compareTo(e2.getName());
                    if(ref!=0){
                        return ref;
                    }
                    else {
                        return Integer.compare(e1.getAge(),e2.getAge());
                    }
                })
                .collect(Collectors.toList())
        );
        System.out.println("sorted by number of task "+employeelist().stream()
                .sorted((emp1,emp2)->Integer.compare(emp1.getTasks().size(),emp2.getTasks().size()))
                .collect(Collectors.toList())


        );
        Map<String,List<Employees>> departmentList=employeelist().stream()
                .collect(Collectors.groupingBy(Employees::getDepartment));
        System.out.println("Employees on each department");
        System.out.println();
        departmentList.forEach((dep,emplist)->{
            System.out.println("department "+dep);
            emplist.forEach(System.out::println);
        });
        System.out.println();

        System.out.println("average salary of each department ");
        System.out.println();
        Map<String,Double> avgSalary=employeelist().stream()
                .collect(Collectors.groupingBy(Employees::getDepartment,Collectors.averagingInt(Employees::getSalary)));
        avgSalary.forEach((dep,avgsalary)->{
            System.out.println("department : "+dep+" average salary : "+avgsalary);
        });
        System.out.println();
        System.out.println("top salried employee in each department");
        System.out.println();
        Map<String, Optional<Employees>> topSalaried=employeelist().stream()
                .collect(Collectors.groupingBy(Employees::getDepartment,Collectors.maxBy((emp1,emp2)->Integer.compare(emp1.getSalary(), emp2.getSalary()))));
        topSalaried.forEach((dep,employee)->{
            System.out.println("department "+dep+" employee "+employee);
        });
        System.out.println();
        System.out.println("List of all tasks of all employees ");
        List<Task> listTask=employeelist().stream()
                .flatMap(emp->emp.getTasks().stream())
                .toList();
        listTask.forEach(System.out::println
        );


        System.out.println("Employee with salary >20000 "+employeelist().stream()
                .filter(employees -> employees.getSalary()>20000)
                .map(employees -> employees.getName().toUpperCase())
                .toList()
        );

        Map<String, Long> numOfEmp=employeelist().stream()
                .collect(Collectors.groupingBy(Employees::getDepartment,Collectors.counting()));
        System.out.println("Employees on each department");
        System.out.println();
        numOfEmp.forEach((dep,count)->{
            System.out.println("department "+dep+" count "+count);
        });

        long totalTask=employeelist().stream()
                .flatMap(employees -> employees.getTasks().stream())
                .count();

        System.out.println("total number of tasks "+totalTask);


    }
}
