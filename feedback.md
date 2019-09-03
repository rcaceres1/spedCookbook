# PROJECT 2 Code Review: Ruben Caceres

Technical Requirements         | Yes | No |
:--                            |:--  |:-- |
Has at least two models        |  x   |    |
A resource can be "Created"  |  x   |    |
A resource can be "Updated"  |  x   |    |
A resource can be "Deleted"  |  x   |    |
Users can sign in using an OAuth provider  |  x   |    |
Authorization middleware used to restrict functionality as applicable |  x   |    |
Is deployed to Heroku          |  x   |    |
OPTIONAL - The app consumes a third-party API |     |  x  |
OPTIONAL - A data resource is accessible on the server via an API (returns JSON)   |     |  x  |

#### Feedback:  _____________________________________________________<br>__________________________________________________________________<br>_______________________________________________________________

GitHub / Readme                                 | Yes | No |
:--                                    |:--  |:-- |
Description of application |  x   |    |
Link to deployed app | x |  |
Unsolved problems                      |  x   |    |
Link to Heroku                         |     |  x  |
Link to Trello                         |     |  x  |
OPTIONAL - The app's exposed API endpoints (routing) are documented   |     |  x  |
Frequent commits      |     |  x  |

Trello                                 | Yes | No |
:--                                    | :-- |:-- |
Wireframes                             |     |  x  |
User Stories tracked in lists  |  x   |    |
User Stories written using correct format "Role - Goal - Reason"  |  x   |    |

Application's Pages                           | Yes |  No |
:-- | :-- | :-- |
Application has logical and functional navigation |x | |
The application's pages have padding (don't touch the window) |x | |
The labels and inputs in forms are not "jagged" |x | |

HTML & views                       | Yes |  No |
:-- | :-- | :-- |
HTML is properly indented                     |  x   |     |
HTML is free of commented out or "dead code"  |     |  x   |
OPTIONAL - HTML inputs use validation (i.e. `pattern` attribute w/RegExp) as needed                 |     |  x   |


JavaScript                    | Yes |  No |
:-- | :-- | :-- |
Properly indented                   |  x   |     |
Free of commented out or "dead code"  |     |  x   |
Array iterator methods used instead of `for` loops |x | |
Arrow functions used for array iterator callbacks | |x |

MongooseJS Models                    | Yes |  No |
:-- | :-- | :-- |
Validations (including `enums`) used as needed  |     |   x  |
Default values used as needed  |     |  x   |
Bonus: Virtual properties used  |     |  x   |
Bonus: Instance and/or static methods used |x | |
Bonus: MongooseJS middleware hooks (pre/post save, etc) used | | x |


Additional Comments, Suggestions, Feedback:

#### Feedback:  
Fantastic comeback this week Ruben! I thought your project came out well. It had decent functionality, and a great story behind the concept. It was a smart move using Bulma (or a CSS framework in general), as it really made your application look super professional. 

Some things you could have done better are: clean up the code base. there is more dead code than what I like to see. Be sure to keep these in the development branch, not the production (master) branch. While on the note of branches, it seems like you pushed to master a lot more than your development branch, which shouldn't be the case. I am curious to know, did you restart your development branch at some point? As far as your JS in general there are some points in the code where there is irregular spacing, and indentations. In regards to your models, there wasn't any use of the 'enums', or default values. This app should most definitely use default values to maintain the overall integrity of your data. In regards to design overall it was clean and elegant, I personally would have used other CSS strategies which we can cover at a later date. 

I know time was a huge factor in regards to what services and functions you were able to complete. For the sake of the cohort, you completed all that was required of you. However, before you take this to production I do encourage flushing out some of the items you mentioned during your presentation, as it would be a huge boon to those who use your service. 

On the matter of business, you should have a defined model of income, just because you don't want teachers to pay (which is super nobel BTW), doesn't mean you can't monetize this through other means (i.e. selling directly to school districts to implement the service through out the district as a whole). Money talks, and in regards to building something, how and where you make the money needs to be clearly and strictly defined. 

Don't let this long feedback fool you. You had an amazing project that sources it's inspiration directly from your past experience. Learning how to work with software is a powerful skill that can most certainly help those who utilize what we build. You are on your way to being a developer who has a great passion for their work. Keep it up!
