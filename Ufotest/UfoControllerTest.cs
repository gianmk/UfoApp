using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestPlatform.CommunicationUtilities;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using Moq;
using Serilog;
using System;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using UFO.Controllers;
using UFO.DAL;
using UFO.Model;
using UFO2.DAL.UfoRepo;
using Xunit;


namespace Ufotest
{
    public class UfoControllerTest
    {
        private const string _loggIn = "loggIn";
        private const string _notLoggIn = "";

        private readonly Mock<IUfoRepository> mockRep = new Mock<IUfoRepository>();
        private readonly Mock<ILogger<UfoController>> mockLog = new Mock<ILogger<UfoController>>();

        private readonly Mock<HttpContext> mockHttpContext = new Mock<HttpContext>();
        private readonly MockHttpSession mockSession = new MockHttpSession();
        [Fact]
        public async Task RegLoggedIn()
        {
            //arrange
            var innUfo = new Ufo
            {
                Id = 1,
                Country = "Norway",
                State = "oslo",
                Location = "oslomet",
                Duration = "3 minutes",
                Date_time = "12.12.12",
                Time = "14:12",
                Shape = "Round",
                Text = "it was round and bright",
            };

            mockRep.Setup(u => u.Reg(innUfo)).ReturnsAsync(true);

            var UfoController = new UfoController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            UfoController.ControllerContext.HttpContext = mockHttpContext.Object;

            //act
            var resultat = await UfoController.Reg(innUfo) as OkObjectResult;
            //assert
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
        }
        [Fact]
        public async Task RegNotLoggedIn()
        {
            //arrange
            var innUfo = new Ufo
            {
                Id = 1,
                Country = "Norway",
                State = "oslo",
                Location = "oslomet",
                Duration = "3 minutes",
                Date_time = "12.12.12",
                Time = "14:12",
                Shape = "Round",
                Text = "it was round and bright",
            };

            mockRep.Setup(u => u.Reg(innUfo)).ReturnsAsync(true);

            var UfoController = new UfoController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _notLoggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            UfoController.ControllerContext.HttpContext = mockHttpContext.Object;

            //act
            var resultat = await UfoController.Reg(innUfo) as UnauthorizedObjectResult;
            //assert
            // Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
            Assert.Equal("Unauthorized, please log in", resultat.Value);
        }
        [Fact]
        public async Task RegLoggInnWrongInput()
        {
            //arrange
            var innUfo = new Ufo
            {
                Id = 1,
                Country = "Norway",
                State = "oslo",
                Location = "oslomet",
                Duration = "3 minutes",
                Date_time = "12.12.12",
                Time = "14:12",
                Shape = "Round",
                Text = "",
            };

            mockRep.Setup(u => u.Reg(innUfo)).ReturnsAsync(true);

            var UfoController = new UfoController(mockRep.Object, mockLog.Object);

            UfoController.ModelState.AddModelError("Text", "Feil i inputvalidering");

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            UfoController.ControllerContext.HttpContext = mockHttpContext.Object;

            //act
            var resultat = await UfoController.Reg(innUfo) as BadRequestObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.BadRequest, resultat.StatusCode);
            Assert.Equal("Feil i inputvalidering", resultat.Value);

        }
        [Fact]
        public async Task RegLoggedNotOk()
        {
            // Arrange

            mockRep.Setup(k => k.Reg(It.IsAny<Ufo>())).ReturnsAsync(false);

            var UfoController = new UfoController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            UfoController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await UfoController.Reg(It.IsAny<Ufo>()) as BadRequestObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.BadRequest, resultat.StatusCode);
            Assert.Equal("Ufo could not be saved", resultat.Value);
        }
        [Fact]
        public async Task DeleteLoggedInOk()
        {
            // Arrange

            mockRep.Setup(u => u.Delete(It.IsAny<int>())).ReturnsAsync(true);

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            ufoController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await ufoController.Delete(It.IsAny<int>()) as OkObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
        }

        [Fact]
        public async Task DeleteNotLoggedIn()
        {
            // Arrange

            mockRep.Setup(u => u.Delete(It.IsAny<int>())).ReturnsAsync(true);

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _notLoggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            ufoController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await ufoController.Delete(It.IsAny<int>()) as UnauthorizedObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.Unauthorized, resultat.StatusCode);

            Assert.Equal("Unauthorized, please log in", resultat.Value);
        }

        [Fact]
        public async Task DeleteLoggedInError()
        {
            // Arrange

            mockRep.Setup(k => k.Delete(It.IsAny<int>())).ReturnsAsync(false);

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            ufoController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await ufoController.Delete(It.IsAny<int>()) as NotFoundObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.NotFound, resultat.StatusCode);

        }

        [Fact]
        public async Task getUfoOK()
        {
            // Arrange
            var ufo = new Ufoer
            {
                Id = 1,
                Country = "Norway",
                State = "oslo",
                Location = "oslomet",
                Duration = "3 minutes",
                Date_time = "12.12.12",
                Time = "14:12",
                Shape = "Round",
                Text = "it was round and bright",
            };


            mockRep.Setup(o => o.GetUfo(It.IsAny<int>())).ReturnsAsync(ufo);
            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            // Act
            var result = await ufoController.GetUfo(It.IsAny<int>()) as OkObjectResult;

            // Assert
            Assert.Equal(ufo, (Ufoer)result.Value);
        }

        [Fact]
        public async Task getUfoNotOK()
        {
            // Arrange

            mockRep.Setup(k => k.GetUfo(It.IsAny<int>())).ReturnsAsync(() => null);

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            // Act
            var resultat = await ufoController.GetUfo(It.IsAny<int>()) as NotFoundObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.NotFound, resultat.StatusCode);
            Assert.Equal("not found", resultat.Value);
        }
        [Fact]
        public async Task GetUfoListOk()
        {
            // Arrange
            var ufo = new Ufoer
            {
                Id = 1,
                Country = "Norway",
                State = "oslo",
                Location = "oslomet",
                Duration = "3 minutes",
                Date_time = "12.12.12",
                Time = "14:12",
                Shape = "Round",
                Text = "it was round and bright",
            };
            var ufo1 = new Ufoer
            {
                Id = 2,
                Country = "Norway",
                State = "oslo",
                Location = "oslomet",
                Duration = "3 minutes",
                Date_time = "12.12.12",
                Time = "14:12",
                Shape = "Round",
                Text = "it was round and bright",
            };
            var ufo2 = new Ufoer
            {
                Id = 3,
                Country = "Norway",
                State = "oslo",
                Location = "oslomet",
                Duration = "3 minutes",
                Date_time = "12.12.12",
                Time = "14:12",
                Shape = "Round",
                Text = "it was round and bright",
            };

            var ufoListe = new List<Ufoer>();
            ufoListe.Add(ufo);
            ufoListe.Add(ufo1);
            ufoListe.Add(ufo2);

            mockRep.Setup(k => k.GetUfoList()).ReturnsAsync(ufoListe);

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);


            // Act
            var resultat = await ufoController.GetUfoList() as OkObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
            Assert.Equal<List<Ufoer>>((List<Ufoer>)resultat.Value, ufoListe);
        }
        [Fact]
        public async Task EditLoggInOk()
        {
            // Arrange

            mockRep.Setup(u => u.Edit(It.IsAny<Ufo>())).ReturnsAsync(true);

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            ufoController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await ufoController.Edit(It.IsAny<Ufo>()) as OkObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);

        }
        [Fact]
        public async Task EditLoggInNotOK()
        {
            // Arrange

            mockRep.Setup(u => u.Edit(It.IsAny<Ufo>())).ReturnsAsync(false);

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            ufoController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await ufoController.Edit(It.IsAny<Ufo>()) as NotFoundObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.NotFound, resultat.StatusCode);

        }
        [Fact]
        public async Task EditNotLoggIn()
        {
            // Arrange

            mockRep.Setup(u => u.Edit(It.IsAny<Ufo>())).ReturnsAsync(false);

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            mockSession[_loggIn] = _notLoggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            ufoController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await ufoController.Edit(It.IsAny<Ufo>()) as UnauthorizedObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.Unauthorized, resultat.StatusCode);
            Assert.Equal("Unauthorized, please log in", resultat.Value);

        }
        [Fact]
        public async Task EditLoggInnWrongInput()
        {
            // Arrange
            
            var ufo = new Ufo
            {
                Id = 3,
                Country = "Norway",
                State = "oslo",
                Location = "oslomet",
                Duration = "3 minutes",
                Date_time = "12.12.12",
                Time = "14:12",
                Shape = "Round",
                Text = "",
                
            };

            mockRep.Setup(k => k.Edit(ufo)).ReturnsAsync(true);

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            ufoController.ModelState.AddModelError("Text","Feil i inputvalidering");

            mockSession[_loggIn] = _loggIn;
            mockHttpContext.Setup(s => s.Session).Returns(mockSession);
            ufoController.ControllerContext.HttpContext = mockHttpContext.Object;

            // Act
            var resultat = await ufoController.Edit(ufo) as BadRequestObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.BadRequest, resultat.StatusCode);
            Assert.Equal("Feil i inputvalidering", resultat.Value);
        }

        [Fact]
        public async Task GetMapListOk ()
        {

            var mapdatalist = new List<KeyValuePair<string, int>>();

            mapdatalist.Add(new KeyValuePair<string, int>("Armenia", 2));
            mapdatalist.Add(new KeyValuePair<string, int>("Norway", 5));
            mapdatalist.Add(new KeyValuePair<string, int>("Sweden", 1));

            // Arrange

            var ufoController = new UfoController(mockRep.Object, mockLog.Object);

            mockRep.Setup(k => k.Mapdata()).ReturnsAsync(mapdatalist);

            // Act
   
            var resultat = await ufoController.Mapdata() as OkObjectResult;

            // Assert 
            Assert.Equal((int)HttpStatusCode.OK, resultat.StatusCode);
        }
    }
}



    

