using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Options;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestPlatform.CommunicationUtilities;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using Moq;
using Serilog;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Xml.Linq;
using UFO.Controllers;
using UFO.DAL;
using UFO.Model;
using UFO2.Controllers;
using UFO2.DAL.UfoRepo;
using UFO2.Model;
using Xunit;
using Countries = UFO.DAL.Countries;
using States = UFO.DAL.States;

namespace Ufotest
{
    public class CascasdingDDControllerTest
    {
        private const string _loggIn = "loggIn";
        private const string _notLoggIn = "";

        private readonly Mock<ICddRepository> mockRep = new Mock<ICddRepository>();
        private readonly Mock<ILogger<CascasdingController>> mockLog = new Mock<ILogger<CascasdingController>>();

        private readonly Mock<HttpContext> mockHttpContext = new Mock<HttpContext>();
        private readonly MockHttpSession mockSession = new MockHttpSession();



        [Fact]
        public async Task GetCountriesOk()
        {


            var country = new Countries
            {
                capital = "oslo",
                Name = "norway",
                id = 1,

            };
            var country1 = new Countries
            {
                capital = "oslo",
                Name = "norway",
                id = 2,
            };
            var country2 = new Countries
            {
                capital = "oslo",
                Name = "norway",
                id = 3,
            };

            var countryList = new List<Countries>();
            countryList.Add(country);
            countryList.Add(country2);
            countryList.Add(country1);

            mockRep.Setup(c => c.GetCountries()).ReturnsAsync(countryList);
            var cascasdingController = new CascasdingController(mockRep.Object, mockLog.Object);

            // Act
            var result = await cascasdingController.GetCountries() as OkObjectResult;

            // Assert
            Assert.Equal(countryList, (List<Countries>)result.Value);
        }
        [Fact]
        public async Task GetStatesNotOk()
        {
            // Arrange
            var state = new States
            {
                id = 1,
                name = "oslo",
                country_name = "norway",
                country_id = 1,
                
            };
            var state1 = new States
            {
                id = 2,
                name = "oslo",
                country_name = "norway",
                country_id = 1,
            };
            var state2 = new States
            {
                id = 3,
                name = "oslo",
                country_name = "norway",
                country_id = 1,
            };

            var stateList = new List<States>();
            stateList.Add(state);
            stateList.Add(state2);
            stateList.Add(state1);

            mockRep.Setup(c => c.GetStates(It.IsAny<string>())).ReturnsAsync(stateList);
            var cascadingController = new CascasdingController(mockRep.Object, mockLog.Object);

            // Act
            var result = await cascadingController.Getstates(It.IsAny<string>()) as OkObjectResult;

            // Assert
            Assert.Equal(stateList, (List<States>)result.Value);
        }
        [Fact]
        public async Task getStateNotOK()
        {
            // Arrange

            mockRep.Setup(k => k.GetStates(It.IsAny<string>())).ReturnsAsync(() => null); // merk denne null setting!

            var CascadingController = new CascasdingController(mockRep.Object, mockLog.Object);

            // Act
            var resultat = await CascadingController.Getstates(It.IsAny<string>()) as NotFoundObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.NotFound, resultat.StatusCode);
            Assert.Equal("not found", resultat.Value);
        }

    }
}  

    




    

