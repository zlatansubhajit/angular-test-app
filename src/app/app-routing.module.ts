import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RandomTwoComponent } from "./random-two/random-two.component";
import { RandomThreeComponent } from "./random-three/random-three.component";
import { RandomComponent } from "./random/random.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'random', component: RandomComponent},
    {path: 'random-two', component: RandomTwoComponent},
    {path: 'random-three', component: RandomThreeComponent},
    {path: "**", component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [DashboardComponent,
    RandomComponent,
    RandomTwoComponent,
    RandomThreeComponent,
    NotFoundComponent]