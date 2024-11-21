import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./employee/employee-food-orders/employee-food-orders.component').then(m => m.EmployeeFoodOrdersComponent) },
    // { path: 'employee-food-orders', loadComponent: ()=> import('./employee/food-order-chart/food-order-chart.component').then(m => m.FoodOrderChartComponent)},
    { path: '**', redirectTo: '' }
];
