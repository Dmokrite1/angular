import { of } from "rxjs";
import { ProjectsService } from "../todos.service";
import { ProjectComponent } from "./project.component";

describe('ProjectComponent', () => {

  const expectations = [{
    status: "En cours",
    expectedColor: "ace7ff"
  }, {
    status: "Termine",
    expectedColor: "#bffcc6"
  }, {
    status: "En attente",
    expectedColor: "#ffffd1"
  }, {
    status: "n'importe quoi",
    expectedColor: "black"
  }, {
    status: "n'importe ou",
    expectedColor: "black"
  }];
  
  for (const { status, expectedColor } of expectations) {
    it(`Gets ${expectedColor} color when status is ${status}`, () => {
      const component = new ProjectComponent({} as never, {} as never);
      const color = component.getStatusColor("En cours");
      
      expect(color).toEqual('#ace7ff');
    });
  }
  
  });


describe('projectComponent', () => {
  it('should call loadProjects() on init', () => {

    const projectComponent = new ProjectComponent(
      {} as never, {} as never
    );

    spyOn(projectComponent, 'loadProjects');

    projectComponent.ngOnInit();
    
    expect(projectComponent.loadProjects).toHaveBeenCalledTimes(1);
  });
});