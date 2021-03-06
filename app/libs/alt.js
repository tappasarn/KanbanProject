// keep alt as a saparate module so the application will use alt as singletion instant
// add aditional FinalStore for the instant
import Alt from 'alt'; 
import makeFinalStore from 'alt-utils/lib/makeFinalStore';

class Flux extends Alt {
  constructor(config) {
    super(config);
    this.FinalStore = makeFinalStore(this);
  }
}

const flux = new Flux();
export default flux;